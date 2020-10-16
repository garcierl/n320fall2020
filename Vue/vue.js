Vue.component("book", {
    props: ["book"], 
    template: `<p>{{book.Title}} {{book.Cover}} {{book.Author}}</p>`
})


let app = new Vue({
el: "#app", 
data: { 
    Books : [{        
            id: 1,
            Title: "Apple",
            Cover: "🍎",
            Author: "John Smith",}, 
{
            id: 2,
            Title:"Coffee",
            Cover:"☕",
            Author: "Jane Doe"}],
    ready: false
}
});