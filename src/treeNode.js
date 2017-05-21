// TreeNode is a tree data structure, with a root(data) and a left and right node

 export default class TreeNode {
	constructor(data, left, right) {
		this.data = data
		this.left = null
		this.right = null
	}

	getData() {
		return this.data
	}

	getLeft() {
		return this.left
	}

	setLeft(left) {
		this.left = left
		return this.data
	}

	getRight() {
		return this.right
	}

	setRight(right) {
		this.right = right
		return this.data
	}
}

