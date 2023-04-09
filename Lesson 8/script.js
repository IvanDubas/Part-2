// //1.Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа

let array1 = new Array();
array1.length = prompt(`Please input quantity of Array - `)
for (let i = 0; i < array1.length; i++) {
    array1[i] = prompt(`Input ${i + 1} element`)
}

// //2.Відсортувати масив за зростанням.
array1.sort((a, b) => a - b)

//3. Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду: {productName: 'bread', productPrice: 14.5, productQuantity: 2}. Мінімальний довжина такого масиву - 6
const shoppingList = [
    {
        productName: 'bread',
        productPrice: 10,
        productQuantity: 4
    },
    {
        productName: 'carrot',
        productPrice: 7,
        productQuantity: 4

    },
    {
        productName: 'meat',
        productPrice: 10,
        productQuantity: 3

    },
    {
        productName: 'potato',
        productPrice: 10,
        productQuantity: 2

    },
    {
        productName: 'water',
        productPrice: 3,
        productQuantity: 2

    },
    {
        productName: 'juice',
        productPrice: 10,
        productQuantity: 3

    },
]
let price = 0;
for (let i = 0; i < shoppingList.length; i++) {
    let sum = shoppingList[i].productPrice * shoppingList[i].productQuantity
    price += sum
}
console.log(`Загальна вартість корзини - ${price}`)

function outpoot_shoppinglist(shoppingList) {
    shoppingList.sort((a, b) => a.productQuantity - b.productQuantity)
    console.log(`\nНайменша кількість продукту у  : \n${shoppingList[0].productName} - у кількості ${shoppingList[0].productQuantity} - штук `)
    for (let i = 1; i < shoppingList.length; i++) {
        if (shoppingList[i].productQuantity === shoppingList[0].productQuantity) {
            console.log(`${shoppingList[i].productName} - у кількості ${shoppingList[i].productQuantity} - штук `)
        }
        continue;
    }
}
outpoot_shoppinglist(shoppingList)
function expensive_Product(shoppingList) {
    shoppingList.sort((a, b) => b.productPrice - a.productPrice)
    console.log(`\nНайдорожчий продукт -  : 
${shoppingList[0].productName}`)
    for (let i = 1; i < shoppingList.length; i++) {
        if (shoppingList[i].productPrice === shoppingList[0].productPrice) {
            console.log(`${shoppingList[i].productName}`)
        }
        continue;
    }

}
expensive_Product(shoppingList)

function create_NewItem(shoppingList) {

    let i = shoppingList.length
    shoppingList.push(i);
    shoppingList[i] = {
        productName: prompt(`Введіть назву нового продукту`),
        productPrice: +prompt(`Введіть ціну нового продукту`),
        productQuantity: +prompt(`Введіть кількість нового продукту`),

    }
}
create_NewItem(shoppingList)

function delete_Item(shoppingList) {
    delete_name = prompt(`Введіть назву продукту для видалення - `)
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].productName === delete_name) {
            shoppingList.splice(i, 1)
            console.log(`Елемент видалений`)
        } continue
    }
}
delete_Item(shoppingList)