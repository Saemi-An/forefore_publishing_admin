// 토스트 메세지 컨트롤
function showToast() {
    const toastUl = document.getElementById('toastUl');
    if (toastUl){
        setTimeout(() => {toastUl.classList.add('show')}, 100);   // 최초 로딩시 100ms 지연
        setTimeout(() => {toastUl.classList.remove("show")}, 3100);   // 3초 뒤 숨기기
    }
}

// 일반 모달 컨트롤
function showNormalModal() {document.getElementById('normalModal').style.display = 'block'}
function closeNormalModal() {document.getElementById('normalModal').style.display = 'none'}

// 폼 모달 컨트롤
function showFormModal() {document.getElementById('formModal').style.display = 'block'}
function closeFormModal() {document.getElementById('formModal').style.display = 'none'}