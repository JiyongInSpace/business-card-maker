import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class CardRepository {
    constructor(){
        this.db = getDatabase();
    }
    syncCards(userId, onUpdate){
        const cardRef = ref(this.db, `${userId}/cards`);
        onValue(cardRef, (card) => {
            const data = card.val();
            data && onUpdate(data);
        })
        return () => off(cardRef);
    }
    saveCard(userId, card){
        set(ref(this.db, `${userId}/cards`), card);
    }
    removeCard(userId, card){
        set(ref(this.db, `${userId}/cards`), card);
    }
}

export default CardRepository;