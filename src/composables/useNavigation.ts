import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter();
  const transitionName = ref('slide-left');

  const navigate = async (name: string, params?: { action: string; path?: string }) => {
    const currentIndex = router.options.routes[0]?.children?.findIndex(
      (route) => route.name === router.currentRoute.value.name
    );
    const nextIndex = router.options.routes[0]?.children?.findIndex((route) => route.name === name);

    if (currentIndex !== undefined && nextIndex !== undefined) {
      transitionName.value = currentIndex < nextIndex ? 'slide-left' : 'slide-right';
    }

    await router.push({ name: name, params: { ...params } });
  };

  return {
    transitionName,
    navigate,
  };
}

