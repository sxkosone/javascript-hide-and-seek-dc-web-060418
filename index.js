function getFirstSelector(selectorsString) {
    return document.querySelector(selectorsString);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    let answer;
    function getDeeper(node) {
        let newChild = node.querySelector("div")
        if (newChild) {
            getDeeper(newChild)
        } else {
            answer = node;
        }
    }
    getDeeper(document.querySelector('#grand-node'));
    return answer;
    

}

function increaseRankBy(n) {
    const items = document.querySelectorAll(".ranked-list li")
    for (let li of items) {
        li.innerHTML = parseInt(li.innerHTML) + n;
    }
}