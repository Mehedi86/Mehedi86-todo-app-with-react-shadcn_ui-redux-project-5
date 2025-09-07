import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { addTask } from "@/redux/features/task/taskSlice";
import { addUser } from "@/redux/features/user/userSlice";
import type { Itask, IUser } from "@/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux";


export function AddUserModal() {

    const form = useForm();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
        dispatch(addUser(data as IUser))
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            {/* title field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Name</FormLabel>
                                        <FormControl>
                                            { /* Your form field */}
                                            <Input {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <div className="my-4 space-x-2">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Save changes</Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
