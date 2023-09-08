function sayHello(name) {
    alert("Hello " + name + "!");
    console.log("Alert sent!");
}
function getName() {
    const userName = prompt("What is your name?");
    sayHello(userName);
}

