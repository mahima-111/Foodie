const useData=(data,id)=>{
    const answer=data.data.cards.filter((c)=>{
        if(c.card.card["@type"].includes("GridWidget")){
            if(c.card.card.id===id){
                return true;
            }
        }
    });
    return answer;
}

export default useData;