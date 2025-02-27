import { useRouter } from 'vue-router'
import { useAnimationStore } from 'src/stores/animation'

export function useNavigation() {
  const router = useRouter()
  const { setTransitionName } = useAnimationStore()

  const navigate = async (name: string) => {
    const currentIndex = router.options.routes[0]?.children?.findIndex(
      (route) => route.name === router.currentRoute.value.name,
    )
    const nextIndex = router.options.routes[0]?.children?.findIndex(
      (route) => route.name === name,
    )

    if (currentIndex !== undefined && nextIndex !== undefined) {
      setTransitionName(currentIndex < nextIndex ? 'slide-left' : 'slide-right')
    }

    await router.push({ name })
  }

  const swipeRight = async () => {
    const currentIndex =
      router.options.routes[0]?.children?.findIndex(
        (route) => route.name === router.currentRoute.value.name,
      ) || 0
    const nextIndex = currentIndex - 1

    const routeName = router.options.routes[0]?.children?.[nextIndex]
      ?.name as string

    if (routeName) {
      await navigate(routeName)
    }
  }

  const swipeLeft = async () => {
    const currentIndex =
      router.options.routes[0]?.children?.findIndex(
        (route) => route.name === router.currentRoute.value.name,
      ) || 0
    const nextIndex = currentIndex + 1

    const routeName = router.options.routes[0]?.children?.[nextIndex]
      ?.name as string

    if (routeName) {
      await navigate(routeName)
    }
  }

  return {
    navigate,
    swipeRight,
    swipeLeft,
  }
}
