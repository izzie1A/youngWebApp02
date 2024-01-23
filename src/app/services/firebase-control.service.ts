import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, updateDoc, getDocFromCache, deleteDoc } from '@angular/fire/firestore';
import { DocumentData, WhereFilterOp, addDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { Storage, getStorage, provideStorage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseControlService {
  firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);

  constructor() {
    console.log('firebase control');
  }
  async queryCondition(address: string, amountLimit: number, condton1: string, condton2: WhereFilterOp, condton3: string, orderby: string | 'name' | 'date') {
    console.log(condton1);
    let result: DocumentData[] = [];
    const q = await query(
      collection(this.firestore, address),
      where(condton1, condton2, condton3),
      orderBy("name"),
      limit(amountLimit));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, data: doc.data() });
    });
    return result
  }
  // firestore curd
  async createCustomDoc(address: string, file: any) {
    const content = file;
    const docRef = await addDoc(collection(this.firestore, address), content);
    content.id = docRef.id;
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await setDoc(doc(this.firestore, docRef.path), content);
      let x = await this.readDoc(address, docRef.id);
      console.log(x);
    } else {
      console.warn("doc create error!");
    }
  }
  async createDoc(address: string) {
    const content = this.getCustomFile();
    const docRef = await addDoc(collection(this.firestore, address), content);
    content.id = docRef.id;
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await setDoc(doc(this.firestore, docRef.path), content);
      let x = await this.readDoc(address, docRef.id);
      console.log(x);
    } else {
      console.warn("doc create error!");
    }
  }
  async updateDoc(address: string, id: string, content: any) {
    const docRef = await doc(this.firestore, address, id);
    const result = await updateDoc(docRef, content);
    console.log(result);
    return result
  }
  async readDoc(address: string, id: string) {
    const docRef = await doc(this.firestore, address, id);
    try {
      const doc = await getDocFromCache(docRef);
      console.log("Cached document data:", doc.data());
      return doc
    } catch (e) {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { id: docSnap.id, data: docSnap.data() };
      } else {
        console.warn("No such document found");
      }
      return e
    }
  }
  async deleteDoc(address: string, id: string) {
    return await deleteDoc(doc(this.firestore, address, id.toString()));
  }
  getCustomFile() {
    const content = {
      id: "test",
      name: "test",
      description: "description",
      createTime: Date.now(),
      createBy: 'anno',
      tagArray: [],
      imageArray: [this.ranPic()],
      image: "",
      file: "undefinded",
    };
    content.imageArray.push(this.ranPic());
    content.image = this.ranPic();
    return content
  }
  ranInt() {
    return (Math.floor(Math.random() * 10) + 1).toString();
  }
  ranPic() {
    let r = (Math.floor(Math.random() * 10) + 1).toString();
    let rx = (Math.floor(Math.random() * 10) + 1).toString();
    let img = "https://picsum.photos/" + r + "00/" + rx + "00";
    return img;
  }
  getCollectionValueChange(address: string) {
    const itemCollection = collection(this.firestore, address);
    return collectionData(itemCollection) as Observable<any[]>
  }

  // testing
  async writeUserData(address: string, file: any) {
    // /yungFolder/ourProject/testHK
    const docRef = await addDoc(collection(this.firestore, address),file);

    // await setDoc(doc(this.firestore, "/yungFolder/ourProject/testHK", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    //   tag: ["USA", "USA2", "USA3"],
    // });
  }
}