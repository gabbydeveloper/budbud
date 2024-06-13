Ext.define('portal.override.list.Tree', {
  override: 'Ext.list.Tree',

  responsiveConfig: {
    xsmall: {
      micro: true,
      width: 50,
    },
    small: {
      micro: true,
      width: 50,
    },
    medium: {
      micro: false,
      width: 190,
    },
    large: {
      micro: false,
      width: 195,
    }
  },


  onTlMenuSelectionChange: function(treelist, record, eOpts) {
    return true;
  },


});