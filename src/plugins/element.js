import Vue from 'vue'
import { Button, Form, FormItem, Input,
    Container,Header,Aside,Main,
    Menu,Submenu,MenuItemGroup,MenuItem,
    Card,Row,Col,Table,TableColumn,Pagination,
    Dialog
} from 'element-ui'
import {Message} from "element-ui"

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$message=Message
