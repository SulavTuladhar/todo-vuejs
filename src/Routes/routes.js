import MainLayout from './../Layout/MainLayout'

// Sub route
import TodoPage from './../Pages/TodoPage'
import TodoDetail from './../Pages/TodoDetail'
import EditTodo from './../Pages/EditTodo'
import UserDetail from './../Pages/UserDetail'
import EditUser from './../Pages/EditUser'
import LoginPage from './../Pages/LoginPage'
import RegisterPage from './../Pages/RegisterPage'

export default [
    {
        path: '/',
        component: MainLayout,
        children :[
            {path: '', component: TodoPage},
            {path: 'login', component: LoginPage},
            {path: 'register', component: RegisterPage},
            // {path: '', component: TodoPage},
            {path: 'todo-detail', component: TodoDetail},
            {path: 'edit-todo/:id', component: EditTodo},
            {path: 'user-detail/', component: UserDetail},
            {path: 'edit-user', component: EditUser},
        ]
    }
]