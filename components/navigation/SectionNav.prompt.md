Vertical scroll-spy list on a 1px rail; the active item gets a 2px ink bar that scales in. "index" = numbered case-study list; "toc" = compact "On this page" list.
```jsx
<SectionNav items={[{num:'01',label:'DPCL',sub:'Oil & Gas'}]} active={0} />
<SectionNav variant="toc" items={[{label:'Overview'},{label:'Business problem'}]} active={1} />
```
