import ReactCodemirror from "@/components/react-codemirror/react-codemirror";
import {Button, Dialog} from "@radix-ui/themes";


export default function ReactCodemirrorPage() {

  return (
      <Dialog.Root>
        <Dialog.Trigger>
          <Button type={'button'}>View users</Button>
        </Dialog.Trigger>
        <Dialog.Content>
            <ReactCodemirror></ReactCodemirror>
        </Dialog.Content>
      </Dialog.Root>
    // <ReactCodemirror></ReactCodemirror>
  );
}
