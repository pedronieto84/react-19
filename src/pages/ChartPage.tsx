import { useEffect, useState } from "react";
import ChartComponent from "../components/ChartComponent";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "./../hooks/firebaseConfig";
import { UserDatabaseReccord } from "../types/globalTypes";
import PieChartComponent from "../components/PieChartComponent";

function ChartPage() {
  const [loading, setLoading] = useState(true);

  const [arrayTotalEscrito, setArrayTotalEscrito] = useState([]);
  const [arrayOfUsers, setArrayOfUsers] = useState([]);
  useEffect(() => {
    // Reference to the document in Firestore
    const docRef = doc(db, "stats", "globalStats");

    // Set up the listener
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        // When the document data changes, update the state
        const data = docSnap.data();
        const length = data.length;
        setLoading(false);

        // Correctly update the state of arrayTotalEscrito
        setArrayTotalEscrito((prevArray) => [...prevArray, length]);
      } else {
        console.log("No such document!");
      }
    });
    const usersCollection = collection(db, "users");
    // Set up the listener
    const unsubscribe2 = onSnapshot(usersCollection, (docSnap) => {
      const usersData = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UserDatabaseReccord[];
      // When the document data changes, update the state
      console.log('usersData', usersData);
      setArrayOfUsers(usersData);
      setLoading(false);

     
    });

    // Cleanup the listener when the component is unmounted
    return () => {
      unsubscribe2();
      unsubscribe();
    };
  }, []); // Dependencia de reload para manejar la actualización

  if (loading) return <div className="card">Cargando...</div>;

  return (
    <>
      <ChartComponent docData={arrayTotalEscrito} />
      <PieChartComponent docData={arrayOfUsers} />
    </>
  );
}

export default ChartPage;
