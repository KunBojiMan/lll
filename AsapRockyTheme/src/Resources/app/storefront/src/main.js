import QuantityFieldPlugin from './script/quantity-field.plugin'
import AddToCartPluginPlugin from './script/add-to-cart.pluginplugin'

window.PluginManager.register('QuantityField', QuantityFieldPlugin, '[data-quantity-field]')

window.PluginManager.override('AddToCart', AddToCartPluginPlugin, '[data-add-to-cart]')
