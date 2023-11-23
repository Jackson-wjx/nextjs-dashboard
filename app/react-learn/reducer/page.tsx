

// import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import AddTask from './add-task';
import TaskList from './task-list';
import { TasksProvider } from './task-context';

// export const metadata: Metadata = {
//   title: 'Reducer',
// };

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Treval Plan
      </h1>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </main>
  );
}
