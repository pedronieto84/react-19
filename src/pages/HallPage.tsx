import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { db } from "./../hooks/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { auth } from "./../hooks/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useOrderIds } from './../hooks/orderIds';


function HallPage() {


    const [users, setUsers] = useState<{ id: string; email: string }[]>([]);
    

    // Para gestionar el estado de loading y error
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleButtonClick = async () => {
        // Navigate to the "/about" route
        await signOut(auth)
        navigate("/");
      };



    useEffect(() => {
        // Referencia a la colección "users"
        const usersCollection = collection(db, "users");

        // Suscribirse a los cambios en Firestore
        const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
                
                id: doc.id,
                ...doc.data(),
            })) as FirebaseUserWithId[];
            const quitoMiUsuario = usersData.filter((user) => user.email !== auth.currentUser?.email);
            console.log('curr user', auth.currentUser);
            setLoading(false);
            setUsers(quitoMiUsuario);
            
        });

        // Cleanup: Desuscribirse al desmontar el componente
        return () => unsubscribe();
    }, []);


    if (loading) return <div className='card'>Cargando...</div>;
    if (error) return <div className='card'>{error}</div>;
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <div className="container">



                <ul className="list-group">
                    {users.map((user) => (
                        
                        <li key={user.id} className="list-group-item">
                            <Link to={`/chat-room/${useOrderIds(user.id, auth.currentUser?.uid)}`}>{user.email}</Link>
                        </li>
                    ))
                    }


                </ul>
                <div className="d-flex justify-content-center mt-3">

<a href="/" onClick={handleButtonClick}>Salir</a>

</div>

            </div>
 
        </div>
    );
}

export default HallPage;