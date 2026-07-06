class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

function insertAtFirst(head, x){
    let newNode = new Node(x);
    newNode.next = head;
    return newNode;
}

function print(head){

    let temp = head
    l
    while(temp !== null){
        process.stdout.write.toString(temp.data)
        if(temp.next !== null){
            process.stdout.write(" -> ")
        }
        temp = temp.next;
    }
    console.log();

}
function main(){

    let list = new LinkedList();
    list.head = insertAtFirst(list.head, 1);
    list.head = insertAtFirst(list.head, 1);
    list.head = insertAtFirst(list.head, 1);
    list.head = insertAtFirst(list.head, 1);
    list.head = insertAtFirst(list.head, 1);

    

    print(list)

}
main();