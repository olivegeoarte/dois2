/* Classe Device()
   Objetive: Possui os dados do dispositivo
*/
function MyDevice() {
   var name;
   var cordova;
   var platform;
   var uuid;
   var version;
   var model;
   
   // Métodos set 
   this.setName = function (name) {
      this.name = name;
   }
   this.setCordova = function (cordova) {
      this.cordova = cordova;
   }
   this.setPlatform = function (platform) {
      this.platform = platform;
   }
   this.setUuid = function (uuid) {
      this.uuid = uuid;
   }
   this.setVersion = function (version) {
      this.version = version;
   }
   this.setModel = function (model) {
      this.model = model;
   }
   // Métodos get
   this.getName = function () {
      return this.name;
   }
   this.getCordova = function () {
      return this.cordova;
   }
   this.getPlatform = function () {
      return this.platform;
   }
   this.getUuid = function () {
      return this.uuid;
   }
   this.getVersion = function () {
      return this.version;
   }
   this.getModel = function () {
      return this.model;
   }
   
   this.toString = function () {
      return   "Dispositivo: " + this.getModel() +
             "\nS.O.: " + this.getPlatform() +
             "\nVersão: " + this.getVersion() +
             "\nUUID: " + this.getUuid() +
             "\n** Nome modelo: " + this.getName() +
             "\nCordova: " + this.getCordova();
   }
}
         
         
/* Função checkConnection()
   Objective: Verificar qual o tipo de conexão ativa no dispositivo.
*/
 function checkConnection() {
   var networkState = navigator.connection.type;

   var states = {};
   states[Connection.UNKNOWN]  = 'Conexão desconhecida';
   states[Connection.ETHERNET] = 'Ethernet';
   states[Connection.WIFI]     = 'WiFi';
   states[Connection.CELL_2G]  = 'Celular 2G';
   states[Connection.CELL_3G]  = 'Celular 3G';
   states[Connection.CELL_4G]  = 'Celular 4G';
   states[Connection.CELL]     = 'Conexão celular genérica';
   states[Connection.NONE]     = 'Sem conexão rede';

   alert('Tipo de conexão: ' + states[networkState]);
}