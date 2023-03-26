export default class Item{
    constructor(arr, itemLoc=[]) {
        this.itemLocation = itemLoc;
        this.RubicID = arr.RubicID;
        this.cat2 = arr.CatLevel02
        this.Ld2 = this.cat2 + ": ";
        if(this.cat2 === "NULL"){
            this.Ld2 = ""
        }
        this.Display = arr.CatLevel_Item_DisplayText
        this.LocationRt = null
        this.LikertValue = ["", "", "", "", ""]
        this.path = arr.CatLevel01 + ": "+ this.Ld2 + arr.CatLevel_Item
    }

    setComment(text){
        this.LikertValue[0]=text;
    }
}
