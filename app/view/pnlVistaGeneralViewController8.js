/*
 * File: app/view/pnlVistaGeneralViewController8.js
 *
 * This file was generated by Sencha Architect version 4.2.9.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.3.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.3.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Bud.view.pnlVistaGeneralViewController8', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.pnlcategorias',

  onBtnIngresosClick: function(button, e, eOpts) {
    Bud.controller.Funciones.showWin('winCategorias', 'Bud.view.winCategorias');
  },

  onBtnModificarClick: function(button, e, eOpts) {
    const grid = Ext.getCmp('grdCategorias');
    const select = grid.getSelectionModel();
    const items = select.selected.items;
    if (items.length === 1){
      Bud.controller.Funciones.showWin('winCategorias', 'Bud.view.winCategorias', {data: items[0].data});
    }
  },

  onBtnEliminarClick: function(button, e, eOpts) {
    Bud.controller.Funciones.deleteRow('grdCategorias', 'id_tipo_ingreso_gasto_meta');
  },

  onBtnRefrescarClick: function(button, e, eOpts) {
    Ext.getCmp('grdCategorias').getStore().load();
  },

  onPnlCategoriasAfterRender: function(component, eOpts) {
    Bud.controller.Funciones.loadStore('categoriasStore', 'tipos', {tipo: 'M'}, 'grdCategorias');
  }

});
