
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2;
    }
    if(list2 === null){
        return list1;
    }
    let pointer1 = list1; //head1
    let pointer2 = list2; //head2

    
    let resultHead = -1;
    let previousNode = -1;
    while(pointer1 !== null && pointer2 !== null){
        let currentNode = -1
        if(pointer1.val > pointer2.val){
            currentNode = pointer2
            pointer2 = pointer2.next;
        }else{
            currentNode = pointer1
            pointer1 = pointer1.next;
        }
        
        if(resultHead === -1){
            resultHead = currentNode;
        }
        previousNode.next = currentNode;
        previousNode  = currentNode;
    }
    
    if (pointer1 !== null)
        previousNode.next = pointer1
    if (pointer2 !== null)
        previousNode.next = pointer2
    
    return resultHead ;   
};