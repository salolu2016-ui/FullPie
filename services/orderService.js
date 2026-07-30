/* ======================================================
   Servicio de pedidos.
   ====================================================== */

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

/* ======================================================
   Guardar pedido.
   ====================================================== */

export const saveOrder = async (order) => {

    try {

        const docRef = await addDoc(

            collection(db, 'pedidos'),

            {
                ...order,
                createdAt: serverTimestamp(),
            }

        );

        return docRef.id;

    } catch (error) {

        console.error('Error al guardar el pedido:', error);

        throw error;

    }

};