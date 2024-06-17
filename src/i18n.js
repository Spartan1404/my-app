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
                'Dashboard': 'Panel de Control',
                'Welcome': "Bienvenido",
                'Download All Reports': 'Descargar todos los reportes',
                'Revenue Generated': 'Ingresos generados',
                'Line Chart': 'Gráfico de linea',
                'Pie Chart': 'Grafico de pastel',
                'Recent Transactions': 'Transacciones recientes',
                'Emails Sent': 'Emails Enviados',
                "Sales Obtained": 'Ventas Obtenidas',
                "New Clients": 'Nuevos Clientes',
                "Traffic Inbound": "Tráfico entrante",
                "Frequently Asked Questions Page": 'Página de preguntas frecuentes',
                'Important question': 'Pregunta importante',
                'Important question 2': 'Pregunta importante 2',
                'Important question 3': 'Pregunta importante 3'
            }
        }
    }
})

export default i18n