import { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../hooks/firebaseConfig";

function ChartPage() {
    const [loading, setLoading] = useState(true);

    const [arrayTotalEscrito, setArrayTotalEscrito] = useState([]);


    useEffect(() => {
        // Reference to the document in Firestore
        const docRef = doc(db, "stats", 'globalStats');

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

        // Cleanup the listener when the component is unmounted
        return () => unsubscribe();
    }, []); // Dependencia de reload para manejar la actualización

    if (loading) return <div className='card'>Cargando...</div>;

    return (
        <>
            <ChartComponent docData={arrayTotalEscrito} />
        </>
    );
}

export default ChartPage;
