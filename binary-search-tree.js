class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse(node = this.root){
    console.log(node.val);
    if(node.left)this.traverse(node.left)
    if(node.right)this.traverse(node.right)
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
 
    if(this.root === null){
      this.root = new Node(val);
      return this;}
    let curr = this.root;
    while(true){

      if(val > curr.val){
        if(curr.right === null){
          curr.right = new Node(val);
          return this;
        }else{
          curr = curr.right;
        }
      }
      else if(val < curr.val){
        if(curr.left === null){
          curr.left = new Node(val);
          return this;
        }else{
          curr = curr.left;
        }
      }
    }
  }
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
 
    if(this.root === null){ 
    this.root = new Node(val)
    return this
    }
    this.insertRecFunc(this.root, val)
    return this
  }
  insertRecFunc(currNode, value){
    
    if(value>currNode.val){
      if(currNode.right === null){
        currNode.right = new Node(value)
        return
      }else{
        return this.insertRecFunc(currNode.right, value)
      }
    }

    if(value < currNode.val){
      if(currNode.left === null){
        currNode.left = new Node(value)
        return
      }else{
        return this.insertRecFunc(currNode.left, value)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while(true){
      
    
      if(val === currNode.val) return currNode;
      if(val < currNode.val){
        if(!currNode.left)break
        currNode = currNode.left
        
      }
      if(val > currNode.val){
        if(!currNode.right)break
        currNode = currNode.right
      
      }
      
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode=this.root) {
   
    if(val === currNode.val){
       return currNode;}
    if(val > currNode.val){
      if(currNode.right){
        return this.findRecursively(val, currNode.right)
      }
    }
    if(val < currNode.val){
      if(currNode.left){
        return this.findRecursively(val, currNode.left)
      }
    }
   
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, output=[]) {
    output.push(node.val)
    if(node.left)this.dfsPreOrder(node.left, output)
    if(node.right)this.dfsPreOrder(node.right, output)
    return output
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, output=[]) {
    if(node.left) this.dfsInOrder(node.left, output)
    output.push(node.val)
    if(node.right) this.dfsInOrder(node.right, output)
    return output
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, output=[]) {
    if(node.left) this.dfsPostOrder(node.left, output)
    if(node.right) this.dfsPostOrder(node.right, output)
    output.push(node.val)
    return output
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node)
    while(queue.length){
      node = queue.shift();
      data.push(node.val)
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
