import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// function to calculate number of products sold for each person clicked
const calculateProductsSold = (employeeClicked, allOrders) => {
    let productsSold = 0
    for (const order of allOrders) {
        if (employeeClicked.id === order.employeeId) {
            productsSold += 1
        }
    }
    return productsSold
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} sold ${calculateProductsSold(employee, orders)} products`)
                }
            }
        }
    }
)

