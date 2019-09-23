

const menuGlobal = [
    {
        path: '/index',
        name: 'index',
        models: () =>[import('../models/taosModel')],
        component: () => import('../routes/taos'),
    }
];

export default {
    menuGlobal
}