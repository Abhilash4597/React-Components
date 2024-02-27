/* eslint-disable react/prop-types */
import useNavigation from "../Hooks/use-navigation";

export default function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}
