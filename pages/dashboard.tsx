import { NextPage } from "next";
import { useQueryClient } from "react-query";
import {
  LogoutIcon,
  StatusOnlineIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";
import { supabase } from "../utils/supabase";
import { Layout } from "../components/Layout";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import { NoticeForm } from "../components/NoticeForm";
import { NoticeList } from "../components/NoticeList";
import { useState } from "react";

const Dashboard: NextPage = () => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File | null>(null);
  const signOut = () => {
    supabase.auth.signOut();
    queryClient.removeQueries("todos");
    queryClient.removeQueries("notices");
  };

  const { data } = supabase.storage
    .from("profiles")
    .getPublicUrl("admin/fuga/hoge/img_1668051645.png");

  return (
    <Layout title="Dashboard">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />

      <input
        type="file"
        onChange={async (e) => {
          const files = e.target.files;
          if (files === null) return;
          const file = files[0];
          await supabase.storage
            .from("profiles")
            .upload(`items/2022-12-01/${file.name}`, file);
        }}
      />
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className=" h-8 w-8 text-blue-500" />
          </div>
          <TaskForm />
          <TaskList />
        </div>
        <div>
          <div className="my-3 flex justify-center ">
            <StatusOnlineIcon className=" h-8 w-8 text-blue-500" />
          </div>
          <NoticeForm />
          <NoticeList />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
