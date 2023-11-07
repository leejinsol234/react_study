import { useState, useRef } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { MdAddBox } from 'react-icons/md';

const initialForm = {
  id: 0,
  date: '',
  content: '',
};

const Schedules = () => {
  let id = useRef(4);
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      date: '2023/11/04',
      content: '스케줄1',
    },
    {
      id: 2,
      date: '2023/11/05',
      content: '스케줄2',
    },
    {
      id: 3,
      date: '2023/11/06',
      content: '스케줄3',
    },
  ]);

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    form.id = id.current++;
    //배열의 concat메서드 -> 추가하고 새로운 객체를 반환
    setSchedules(schedules.concat(form));
    setForm({ ...initialForm });
  };

  // const [date, setDate] = useState('');
  // const [content, setContent] = useState('');

  const handleChange = (e) => {
    // form[e.currentTarget.name] = e.currentTarget.value;
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
    //setForm(form) -> 얕은 비교로 주소값이 동일하므로 reRendering되지 않는다. 따라서 전개 연산자{...form}를 사용해 깊은 복사로 주소값이 달라지도록 한다.
  };

  const onRemove = (id) => {
    //filter : 조건으로 배열에서 삭제하고 삭제된 새 배열을 반환함
    //const newSchedules = schedules.filter((s) => s.id !== id);
    setSchedules(schedules.filter((s) => s.id !== id));
  };

  return (
    <>
      <h1>스케줄 등록</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          placeholder="날짜"
          onChange={handleChange}
          value={form.date}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={handleChange}
          value={form.content}
        />
        <button type="submit">
          <MdAddBox />
        </button>
      </form>
      <hr />
      <ul>
        {schedules.map(
          (
            s, // map()함수로 배열 객체를 JSX 컴포넌트로 변환 //데이터가 가진 고유값을 key 값으로 설정
          ) => (
            <li key={s.id}>
              {s.date}/{s.content}
              <FiXCircle onDoubleClick={() => onRemove(s.id)} />
            </li>
          ),
        )}
      </ul>
    </>
  );
};
export default Schedules;
