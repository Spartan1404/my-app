import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({

    debug: true,
    fallbackLng: 'en',
    resources:{
        es:{
            translation:{
                'Junior Front-end Developer': 'Desarrollador Front-end Junior',
                'Technologies in this project:': 'Tecnologias usadas en este proyecto:',
                'Bar Chart': 'Gráfico de Barras',
                "Simple Bar Chart": "Gráfico de Barras Simple",
                "Please enter a new title for your event": "Introduzca un título para el evento",
                'Are you sure you want to delete the event?': '¿Esta seguro que desea borrar el evento?',
                'Calendar': 'Calendario',
                'Full Calendar Page': 'Página de Full Calendar',
                'Contacts': 'Contactos',
                'List of contacts': 'Lista de contactos',
                "Name": 'Nombre',
                "Age": 'Edad',
                'Phone': 'Teléfono',
                "Email": "Email",
                "Address": "Dirección",
                'City': 'Ciudad',
                'ZipCode': 'Código Zip',
                "Register ID": 'ID de Registro',
                'Dashboard': 'Panel Principal',
                'Welcome': "Bienvenido",
                'Download All Reports': 'Descargar todos los reportes',
                'Revenue Generated': 'Ingresos generados',
                'Line Chart': 'Gráfico de línea',
                'Pie Chart': 'Grafico de pastel',
                'Recent Transactions': 'Transacciones recientes',
                'Emails Sent': 'Emails Enviados',
                "Sales Obtained": 'Ventas Obtenidas',
                "New Clients": 'Nuevos Clientes',
                "Traffic Inbound": "Tráfico entrante",
                "Frequently Asked Questions Page": 'Página de preguntas frecuentes',
                'Important question': 'Pregunta importante',
                'Important question 2': 'Pregunta importante 2',
                'Important question 3': 'Pregunta importante 3',
                'Required field': 'Campo requerido',
                'First Name': 'Nombre',
                "Last Name": 'Apellidos',
                "Contact Number": 'Número de contacto',
                "Address 1": 'Dirección 1',
                "Address 2": 'Dirección 2',
                'Create New User': 'Crear nuevo usuario',
                'Choropleth Map': 'Mapa coroplético',
                "First Big React Project": 'Primer proyecto grande con React',
                'Data': 'Datos',
                "Manage Team": 'Gestionar equipo',
                "Contacts Info": 'Información de contactos',
                "Invoices Balances": 'Saldos de facturas',
                'Pages': 'Páginas',
                "Profile Form": "Formulario de perfil",
                "FAQ": 'Preguntas Frecuentes',
                'Charts': "Gráficas",
                'Information': 'Información',
                "About": 'Acerca de',
                "Form": 'Formulario',
                "Simple form": 'Formulario simple',
                "Access": 'Acceso',
                "Team": 'Equipo',
                "Manage team members": 'Gestionar miembros del equipo',
                "Simple Pie Chart": 'Grafico de pastel simple',
                "Simple Line Chart": 'Gráfico de línea simple',
                "Cost": 'Costo',
                "Date": 'Fecha',
                "Invoices": 'Facturas',
                "List of invoice balance": 'Lista de saldo de factura'
            }
        }
    }
})

export default i18n