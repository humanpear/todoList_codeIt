"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent, KeyboardEventHandler } from "react";
import GNB, { GNBStyle } from "@/components/ui/GNB";
import MemoBox from "@/components/features/MemoBox";
import ImageUpload from "@/components/features/ImageUpload";
import CheckListDetail, {
  CheckListDetailStyle,
} from "@/components/ui/CheckListDetail";
import Button, { ButtonStyle } from "@/components/ui/Button";
import { getTodoById, updateTodo, deleteTodo, Todo } from "@/apis/todo";

export default function Page() {
  const params = useParams();
  const rawId = params.itemId;
  const itemId = Array.isArray(rawId) ? rawId[0] : rawId;
  const router = useRouter();

  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [memoText, setMemoText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetch() {
      if (!itemId) return;
      try {
        const data = await getTodoById(itemId);
        setTodo(data);

        setName(data.name);
        setMemoText(data.memo ?? "");
        setImageUrl(data.imageUrl ?? "");
      } catch (err) {
        console.error("할 일 불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [itemId]);

  if (loading) return <p className="w-full justify-center pt-[24px]">로딩중...</p>;
  if (!todo)
    return <p className="pl-[360px] pt-[24px]">할 일을 찾을 수 없습니다.</p>;

  const handleFinish = async () => {
    try {
      await updateTodo(todo.id, {
        name,
        memo: memoText,
        imageUrl,
        isCompleted: todo.isCompleted,
      });
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("수정 실패", err.response?.status, err.response?.data);
    }
  };

  const handleDelete = async () => {
    if (!confirm("정말 삭제할까요?")) return;
    try {
      await deleteTodo(todo.id);
      router.push("/");
    } catch (err) {
      console.error("삭제 실패", err);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleNameKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") handleFinish();
  };

  const handleToggle = async () => {
    if (!todo) return;
    try {
      const updated = await updateTodo(todo.id, {
        name,
        memo: memoText,
        imageUrl,
        isCompleted: !todo.isCompleted,
      });
      setTodo(updated);
      setName(updated.name);
      setMemoText(updated.memo ?? "");
      setImageUrl(updated.imageUrl ?? "");
    } catch (err) {
      console.error("상태 변경 실패", err);
    }
  };

  return (
    <div className="xl:w-[1920px]">
      <div className="hidden xl:block">
        <GNB GnbStyle={GNBStyle.LARGE} />
      </div>
      <div className="hidden md:block xl:hidden">
        <GNB GnbStyle={GNBStyle.MEDIUM} />
      </div>
      <div className="md:hidden">
        <GNB GnbStyle={GNBStyle.SMALL} />
      </div>

      <div className="flex flex-col items-center pt-[24px] w-[375px] md:w-[744px] xl:w-full gap-[24px]">
        <CheckListDetail
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleNameKeyDown}
          checkListDetailStyle={
            todo.isCompleted
              ? CheckListDetailStyle.ACTIVE
              : CheckListDetailStyle.DEFAULT
          }
          onToggle={handleToggle}
        ></CheckListDetail>

        <div className="flex flex-col xl:flex-row items-center gap-[24px]">
          <ImageUpload
            initialUrl={imageUrl}
            onUpload={(url) => setImageUrl(url)}
          />
          <MemoBox
            value={memoText}
            onChange={(m: string) => setMemoText(m)}
          ></MemoBox>
        </div>
        <div className="flex xl:pl-[630px] gap-[16px]">
          <div onClick={handleFinish}>
            <Button
              buttonStyle={
                todo.isCompleted
                  ? ButtonStyle.EDIT_ACTIVE_LARGE
                  : ButtonStyle.EDIT_DEFAULT_LARGE
              }
            />
          </div>
          <div onClick={handleDelete}>
            <Button buttonStyle={ButtonStyle.DELETE_LARGE} />
          </div>
        </div>
      </div>
    </div>
  );
}
