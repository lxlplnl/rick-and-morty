import React, { useCallback, useEffect } from "react";
import List from "@material-ui/core/List";
import { Loader } from "../loader";

export function InfinityList({ initializer, onScrollEnd, list, pending, initialized, renderListThumb, showLoader = true }) {

  useEffect(() => {
    if (!initialized) initializer();
  }, [initializer, initialized]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    onScrollEnd()
  }, [onScrollEnd]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, initialized]);

  return <>
    {showLoader && <Loader pending={pending} />}
    <List>
      {list.map(renderListThumb)}
    </List>
  </>
}

export default InfinityList;
