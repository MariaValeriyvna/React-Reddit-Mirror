// import { ProgressPlugin } from "webpack";
// import { stopPropogation } from "./utils/react/stopPropogation";
// import { preventDefault } from "./utils/react/preventDefault";
// import { pickFromSyntheticEvent } from "./utils/react/pickFromSyntheticEvent";

// const withIdKey =withKey('id');

// function Feed(props: {blocks: IBlockProps[]}) {
//   return (
//     <div>
//       { props.blocks.map(withIdKey(Block))}
//     </div>
//   );
// }

// interface IBlockProps {
//   title: string;
//   id: string;
// }

// function Block(props: IBlockProps) {
//   return (
//   <div>{props.title}</div>
//   )
// }

// function withKey(key?: string) {
//   return <E, T extends React.ComponentType<E>> (component: T) => (props: E, index: number) =>
//    React.createElement(
//      component,
//      {...props, key: key ? props[key]:index},
//      [],
//    );
// }

// function Input ({onChange, value}: {onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)}/>
//   )
// }

// function Checkbox (props: {onChange: (value: boolean) => void, value: boolean}) {
//   return (
//     <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)}/>
//   )
// }

// export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
// export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

// function NotStandardLink() {
//   return (
//     <a onClick={preventDefault(stopPropogation(props.onClick))}>Hello</a>
//   )
// }

// interface InputProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// function Input({value, onChange}: InputProps) {
//   return (
//     <input value={value} onChange={preventDefault(stopPropogation(getValue(onChange)))}/>
//   )
// }