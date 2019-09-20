

const menuGlobal = [
    {
        path: '/',
        models: () =>[import('../models/taosModel')],
        component: () => import('../routes/taos'),
    }
];

export default {
    menuGlobal
}