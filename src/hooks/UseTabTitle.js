import { onMounted } from "vue";

const useTabTitle = (TabTitleText) => {
    onMounted(() => 
        document.title = `Nadin Soft - ${TabTitleText}`
    )
};

export default useTabTitle;