<template>
    <div class="txt_error">
        <strong>404 NOT FOUND</strong>
        <strong>페이지가 존재하지 않습니다.</strong>
    </div>
</template>

<script>
export default {
    name: "Error",
};
</script>

<style scoped>
.txt_error {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ad2024;
    font-size: 50px;
    text-align: center;
    word-break: keep-all;
}

.txt_error strong+strong {
    color: #333;
}

@media screen and (max-width: 768px) {
    .txt_error {
        font-size: 30px;
    }
}</style>