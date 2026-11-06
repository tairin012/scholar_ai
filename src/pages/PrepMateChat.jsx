import { useEffect, useRef, useState } from 'react';

const SYSTEM_REPLY = 'This is a reply from the system.';

export default function PrepMateChat() {
  const [messages, setMessages] = useState([
    { from: 'You', text: 'Hello there!' },
    { from: 'System', text: SYSTEM_REPLY },
  ]);
  const [draft, setDraft] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'You', text }]);
    setDraft('');
    // Placeholder until a real PrepMate backend is connected.
    setTimeout(() => setMessages((m) => [...m, { from: 'System', text: SYSTEM_REPLY }]), 400);
  };

  return (
    <form onSubmit={send}>
      <div className="max-w-md mx-auto p-4 my-8">
        <div className="chat-container p-4 rounded-lg shadow-md bg-white">
          {messages.map((m, i) => (
            <div key={i}>
              <div className={`flex items-center mb-4 ${m.from === 'You' ? 'justify-between' : 'justify-end'}`}>
                <div className="text-sm font-semibold text-blue-600">{m.from}</div>
              </div>
              <div className="bg-gray-200 rounded-lg p-2 mb-4">{m.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <textarea
          className="w-full border-2 bg-white border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
          rows="3"
          placeholder="Type your message..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) send(e);
          }}
        />

        <button type="submit" className="btn btn-outline bg-[#6A64F1] text-white">
          Send <i className="bx bxs-send"></i>
        </button>
      </div>
    </form>
  );
}
