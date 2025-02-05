import  { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../hooks/firebaseConfig";
function ChartPage() {

    console.log('chartPage');
    const [docData, setDocData] = useState(null);
    const [loading, setLoading] = useState(true);

    // The ID of the document you want to listen to
    const docId = "user123"; // Replace with your document's ID
  
    useEffect(() => {
      // Reference to the document in Firestore
      const docRef = doc(db, "stats", 'globalStats');
  
      // Set up the listener
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          // When the document data changes, update the state
          const data = docSnap.data();
          console.log('changes', data);
          setDocData(data);
        } else {
          console.log("No such document!");
        }
      });
  
      // Cleanup the listener when the component is unmounted
      return () => unsubscribe();
    }, [docId]);


    if (loading) return <div className='card'>Cargando...</div>;

    return (<>


        <ChartComponent />

    </>);
}

export default ChartPage;