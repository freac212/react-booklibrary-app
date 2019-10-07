(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/book-reader-solid.336c891a.svg"},17:function(e,t,a){e.exports=a.p+"static/media/bookmark-solid.4ab98fb2.svg"},18:function(e,t,a){e.exports=a.p+"static/media/check-solid.358e77fa.svg"},19:function(e,t,a){e.exports=a.p+"static/media/arrow-drop-down.9d4e3f36.svg"},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(15),s=a.n(r),l=a(5),c=a(6),i=a(8),u=a(7),h=a(9),d=a(36),p=(a(26),a(10)),m=a(11),f=a(34),k="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:b},y=function(){return fetch("".concat(k,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(k,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(k,"/search"),{method:"POST",headers:Object(p.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},S=a(16),N=a.n(S),B=a(17),j=a.n(B),R=a(18),O=a.n(R),A=a(19),w=a.n(A),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getIcon=function(e){switch(e){case"currentlyReading":return N.a;case"wantToRead":return j.a;case"read":return O.a;default:return w.a}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book;return n.a.createElement("li",null,n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),n.a.createElement("div",{className:"book-shelf-changer",style:{backgroundImage:"url(".concat(this.getIcon(t.shelf),")")}},n.a.createElement("select",{onChange:function(a){e.props.reloadSearchPage&&e.props.reloadSearchPage(),e.props.updateBookShelf(t,a.target.value)},value:t.shelf},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},t.title),void 0!==t.authors&&n.a.createElement("div",{className:"book-authors"},t.authors)))}}]),t}(o.Component),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={searchBar:"",searchResults:[]},a.reloadSearchPage=function(){a.getQueryResults(a.state.searchBar)},a.updateSearch=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value)),a.getQueryResults(e.target.value)},a.getQueryResults=function(e){""!==e?g(e).then(a.parseResults):a.displayResults([])},a.parseResults=function(e){void 0===e||e.error?a.displayResults([]):y().then(function(t){return e.filter(function(e){return void 0!==e.imageLinks}).map(function(e){var a;return t.forEach(function(t){e.id===t.id&&(a=t)}),a||Object(p.a)({},e,{shelf:"none"})})}).then(function(e){a.displayResults(e)})},a.displayResults=function(e){a.setState(function(){return{searchResults:e}})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(f.a,{to:"/",className:"close-search"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",name:"searchBar",placeholder:"Search by title or author",value:this.state.searchBarVal,onChange:this.updateSearch}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},this.state.searchResults.map(function(t){return n.a.createElement(C,{book:t,key:t.id,updateBookShelf:e.props.updateBookShelf,reloadSearchPage:e.reloadSearchPage})}),0===this.state.searchResults.length&&this.state.searchBar.length>0&&n.a.createElement("h2",null,"No results"))))}}]),t}(o.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){y().then(this.props.loadUpdatedShelves)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,this.props.localBooksArray.filter(function(e){return"currentlyReading"===e.shelf}).length>0&&n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.localBooksArray.filter(function(e){return"currentlyReading"===e.shelf}).map(function(t){return n.a.createElement(C,{book:t,key:t.id,updateBookShelf:e.props.updateBookShelf})})))),this.props.localBooksArray.filter(function(e){return"wantToRead"===e.shelf}).length>0&&n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.localBooksArray.filter(function(e){return"wantToRead"===e.shelf}).map(function(t){return n.a.createElement(C,{book:t,key:t.id,updateBookShelf:e.props.updateBookShelf})})))),this.props.localBooksArray.filter(function(e){return"read"===e.shelf}).length>0&&n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},this.props.localBooksArray.filter(function(e){return"read"===e.shelf}).map(function(t){return n.a.createElement(C,{book:t,key:t.id,updateBookShelf:e.props.updateBookShelf})})))),0===this.props.localBooksArray.length&&n.a.createElement("h2",null,"Collection is empty! Add some books from the search page!"))),n.a.createElement("div",{className:"open-search"},n.a.createElement(f.a,{to:"/search",className:"button"},"Add a book")))}}]),t}(o.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={localBooksArray:[]},a.updateBookShelf=function(e,t){E(e,t).then(y).then(a.loadUpdatedShelves)},a.loadUpdatedShelves=function(e){a.setState(function(){return{localBooksArray:e}})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement(d.a,{exact:!0,path:"/search",render:function(){return n.a.createElement(x,{localBooksArray:e.state.localBooksArray,loadUpdatedShelves:e.loadUpdatedShelves,updateBookShelf:e.updateBookShelf})}}),n.a.createElement(d.a,{exact:!0,path:"/",render:function(){return n.a.createElement("div",{className:"list-books"},n.a.createElement(T,{localBooksArray:e.state.localBooksArray,loadUpdatedShelves:e.loadUpdatedShelves,updateBookShelf:e.updateBookShelf}))}}))}}]),t}(o.Component),P=(a(31),a(35));s.a.render(n.a.createElement(P.a,null,n.a.createElement(U,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.30c793c2.chunk.js.map