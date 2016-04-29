var headers = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } };
var dateFormat = 'dd/MM/yyyy';
var CODE_REGEXP = /^[a-zA-Z_.-]+[0-9a-zA-Z_]*$/i;
var EMAIL_REGEXP = /^[A-Za-z0-9]+(.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(.[A-Za-z0-9]+)*(.[A-Za-z]{2,})$/;
var VPSWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/i;