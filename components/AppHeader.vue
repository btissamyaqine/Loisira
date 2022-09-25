<template>
  
  <header class="header">
    <div class="navBar">
      <h1 class="title">Loisira</h1>
        <ul>
          <li><nuxt-link to="#">Reservation</nuxt-link></li>
          <li><nuxt-link to="#">Contact</nuxt-link></li>
        </ul>
        
    </div>
    <div class="search">
      <input type="text" class="searchBar">
      <button type="submit" class="btn" >recherche</button>
    </div>
  </header>
 
 


</template>

<script>
// import Icon from "../assets/image/Icon.svg?inline";
export default {
    name: "AppHeader",
    // components: { Icon }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: baseline;
  padding-bottom: 3rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
}

@media screen and (max-width: 500px) {
  header .navBar .search{
float: none;
    display: block;
    text-align: left;
}
 .search {
float: none;
}
  
  .search .navBar{
    float: none;
  }
}
.navBar {
  padding-right: 40px;

}
.navBar .title {
  font-size: 3rem;
  /* padding-left: 10px; */
  color: brown;
}
.navBar ul {
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 0px;
  
}
.navBar a {
  float: left;
  display: block;
  color: brown;
  text-align: center;
  padding: 6px;
  text-decoration: none;
  font-size: 17px;
  }
@media screen and (max-width: 768px) {
  .navBar.responsive {position: relative;}
  
  .navBar.responsive ul {
    float: none;
    display: block;
    text-align: left;
  }
}
/* .propos {
  padding-top: 3.125rem;
} */
/* .search {
  border: 1px solid grey;
  border-radius: 5px;
  height: 25px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
} */
.searchBar .btn {
  display: grid;
  list-style-type: none;
  padding-left: 10px;
  padding-right: 0px;
  margin-right: 0px;
}
.searchBar {
  
  /* border: 1px solid rgb(190, 188, 188);
  border-radius: 10px;
  height: 2.6rem;
  width: 18.75rem;
  outline: 0;
  border-right: 0px solid transparent;
  border-radius: 10px 0px 0px 10px;
  padding-left: 5px; */
  /* border: 1px solid #555; */
  width: 100%;
  padding: 1px 4px 1px 40px;
  background: transparent 
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='brown' width='16' height='16' class='bi bi-search' viewBox='0 0 512 512'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-4.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
  border: 1px solid rgb(190, 188, 188);
  border-radius: 10px;
  height: 2.6rem;
  width: 18.75rem;
  outline: 0;
  border-right: 0px solid transparent;
  border-radius: 10px 0px 0px 10px;
}
input .searchBar {
  border: none;
  padding: 0;
}
.btn {
 
 border: 1px solid rgb(190, 188, 188);
  border-radius: 10px;
  height: 2.8rem;
  outline: 0;
  margin-left: -6px;
  border-left: 0px solid transparent;
  border-radius: 0px 10px 10px 0px;
  /* display: ; */

  
}

/* .search a {
   float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
} */
@media screen and (max-width: 600px) {
  .search.responsive input {
    position: relative;
  }

}

</style>