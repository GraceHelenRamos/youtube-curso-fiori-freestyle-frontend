sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /** passar toas as classe que vc vai utilizar dentro desse controler
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) { // aqui nos () deve conter dodas as classes sap que forão declaradas da linha 2 para baixo  colocando o nome do final dela 
        "use strict";

        return Controller.extend("zov.controller.View1", {
            onInit: function () {
//debugger;
            },
            onPress: function () {
                alert("Hello word");
            },
            onBeforeRendering: function () {
                //alert("onBeforeRendering");
            },

            onAfterRendering: function () {
                //alert("onAfterRendering");
            },

            onExit: function () {
                //alert("onExit");
            },

            onCalcular: function () {
                var oView = this.getView();//por padrão iniciar com o nome do que vc está referenciando nesse caso objeto = o
                var iB1 = parseInt(oView.byId("b1").getValue());//i de input + o id dele
                var iB2 = parseInt(oView.byId("b2").getValue());
                var iB3 = parseInt(oView.byId("b3").getValue());
                var iB4 = parseInt(oView.byId("b4").getValue());
                var fResultado = 0;

                fResultado = (iB1 + iB2 + iB3 + iB4) / 4;

                oView.byId("resultado").setValue(fResultado);

                MessageToast.show("Resultado = " + fResultado); //jogando o camppo de resultado na tela pegando o id da view

                // MessageToast
                // sap.m.MessageToast

                //oView.destroy();
            }

        });
    });
