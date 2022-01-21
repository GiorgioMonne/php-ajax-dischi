const app = new Vue({
    el: "#app",
    data: {
        brani: []
    },
    created(){
        axios.get("http://localhost:8080/php-ajax-dischi/php-server/index.php")
        .then((response) => {
            console.log(response);
            this.brani = response.data;
        });
    }
});

