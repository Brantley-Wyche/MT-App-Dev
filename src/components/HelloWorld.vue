<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    
    <div class="square">
      <div class="content">
        <h1>{{ msg }}</h1>
        <div class="fields">
          <input type="text" placeholder="Enter LanID here" />
        </div>
        
        <div class="fields">
          <input type="text" placeholder="Enter password here" />
        </div>
        
        <button class="login_button">Login</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.square {
  position: relative;
  border: 5px solid #FFD03E;
  margin: 0 auto;
  height: 0;
  max-width:600px;
  padding-bottom:20%;
  box-shadow: 5px 5px 7px grey;
}



.content {
  position: absolute;
  width: 100%;
  
}

.fields{
  margin-bottom: 15px;
}

input{
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid black;
}

.login_button {
  padding: 10px 50px 10px 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #007955;
  color: white;
  border: 3px solid #FFD03E;
}
</style>
