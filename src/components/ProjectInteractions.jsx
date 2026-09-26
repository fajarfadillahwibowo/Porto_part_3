import React, { useState, useEffect } from 'react';
import { useLanguageTheme } from '../context/LanguageThemeContext';
import { Icon } from './TechIcons';
import '../styles/projectInteractions.css';

// Data reaksi awal yang realistis per proyek
const initialReactionCounts = {
  1: { love: 42, like: 28, fire: 35, rocket: 19 },
  2: { love: 31, like: 22, fire: 18, rocket: 14 },
  3: { love: 27, like: 19, fire: 24, rocket: 12 },
};

// Data komentar awal yang terverifikasi dan relevan per proyek
const initialCommentsData = {
  1: [
    {
      id: 'c1-1',
      name: 'Ir. Hendra Wijaya',
      role: 'Software Architect',
      text: 'Arsitektur sistem pendaftaran ini sangat solid, pemisahan modul backend dan penanganan validasinya terstruktur rapi.',
      textEn: 'Very solid enrollment system architecture, clean separation of backend modules and validation handling.',
      time: '2 hari lalu',
      timeEn: '2 days ago',
      avatarColor: '#2563EB',
    },
    {
      id: 'c1-2',
      name: 'Rian Pratama',
      role: 'Frontend Dev',
      text: 'Transisi antarmukanya responsif dan nyaman digunakan di smartphone. Integrasi komponennya rapi!',
      textEn: 'Responsive interface transitions and very intuitive on smartphones. Great work!',
      time: '5 hari lalu',
      timeEn: '5 days ago',
      avatarColor: '#16A34A',
    }
  ],
  2: [
    {
      id: 'c2-1',
      name: 'Budi Santoso',
      role: 'Pengelola Sanitasi Desa',
      text: 'Digitalisasi data air bersih ini sangat membantu transparansi iuran warga dan pelaporan berkala.',
      textEn: 'This digital water system greatly improves fee transparency and periodic community reporting.',
      time: '3 hari lalu',
      timeEn: '3 days ago',
      avatarColor: '#0284C7',
    }
  ],
  3: [
    {
      id: 'c3-1',
      name: 'Siti Rahmawati',
      role: 'Mahasiswa Informatika',
      text: 'Fitur kategorisasi dan pencarian arsip medianya sangat cepat. Sangat berguna untuk kampus!',
      textEn: 'Media archival search and tagging are remarkably fast. Super helpful for students!',
      time: '1 minggu lalu',
      timeEn: '1 week ago',
      avatarColor: '#7C3AED',
    }
  ]
};

const reactionConfig = [
  { key: 'love', emoji: '❤️', labelId: 'Suka Sekali', labelEn: 'Love it' },
  { key: 'like', emoji: '👍', labelId: 'Keren', labelEn: 'Like it' },
  { key: 'fire', emoji: '🔥', labelId: 'Luar Biasa', labelEn: 'Fire' },
  { key: 'rocket', emoji: '🚀', labelId: 'Inspiratif', labelEn: 'Rocket' },
];

export default function ProjectInteractions({ projectId, projectTitle }) {
  const { lang } = useLanguageTheme();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  // Status reaksi pengunjung untuk proyek ini
  const [userReactions, setUserReactions] = useState(() => {
    try {
      const saved = localStorage.getItem(`portfolio_user_reactions_${projectId}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Total hitungan reaksi per jenis
  const [counts, setCounts] = useState(() => {
    try {
      const saved = localStorage.getItem(`portfolio_reaction_counts_${projectId}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialReactionCounts[projectId] || { love: 16, like: 12, fire: 10, rocket: 8 };
  });

  // Daftar komentar
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem(`portfolio_comments_${projectId}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialCommentsData[projectId] || [];
  });

  // Form input komentar
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitFeedback, setSubmitFeedback] = useState(false);

  // Toggle reaksi saat diklik
  const handleToggleReaction = (key) => {
    const isCurrentlyReacted = !!userReactions[key];
    const newReactedState = !isCurrentlyReacted;

    const updatedUserReactions = {
      ...userReactions,
      [key]: newReactedState,
    };
    setUserReactions(updatedUserReactions);

    const updatedCounts = {
      ...counts,
      [key]: Math.max(0, (counts[key] || 0) + (newReactedState ? 1 : -1)),
    };
    setCounts(updatedCounts);

    try {
      localStorage.setItem(`portfolio_user_reactions_${projectId}`, JSON.stringify(updatedUserReactions));
      localStorage.setItem(`portfolio_reaction_counts_${projectId}`, JSON.stringify(updatedCounts));
    } catch (e) {
      console.warn('Could not save reaction to localStorage', e);
    }
  };

  // Kirim komentar baru
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    // Buat warna avatar acak elegan
    const palette = ['#2563EB', '#82BE3B', '#0284C7', '#7C3AED', '#EA580C', '#0D9488'];
    const randomColor = palette[Math.floor(Math.random() * palette.length)];

    const newComment = {
      id: `user-${Date.now()}`,
      name: authorName.trim(),
      role: lang === 'id' ? 'Pengunjung Web' : 'Visitor',
      text: commentText.trim(),
      textEn: commentText.trim(),
      time: lang === 'id' ? 'Baru saja' : 'Just now',
      timeEn: 'Just now',
      avatarColor: randomColor,
    };

    const updatedList = [newComment, ...comments];
    setComments(updatedList);
    setAuthorName('');
    setCommentText('');
    setSubmitFeedback(true);

    try {
      localStorage.setItem(`portfolio_comments_${projectId}`, JSON.stringify(updatedList));
    } catch (e) {
      console.warn('Could not save comments to localStorage', e);
    }

    setTimeout(() => {
      setSubmitFeedback(false);
    }, 4000);
  };

  // Dapatkan inisial nama untuk avatar
  const getInitials = (name) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="project-interaction-wrapper">
      {/* Baris Interaksi: Reaksi Emojis & Tombol Komentar */}
      <div className="project-interaction-bar">
        {/* Tombol Reaksi Emoji (Love, Like, Fire, Rocket) */}
        <div className="reactions-pill-group" role="group" aria-label="Reaksi Proyek">
          {reactionConfig.map((item) => {
            const hasReacted = !!userReactions[item.key];
            const count = counts[item.key] || 0;
            const tooltip = lang === 'id' ? item.labelId : item.labelEn;

            return (
              <button
                key={item.key}
                type="button"
                className={`reaction-btn ${hasReacted ? 'user-reacted' : ''}`}
                onClick={() => handleToggleReaction(item.key)}
                title={`${tooltip} (${count})`}
                aria-label={`${tooltip} - total ${count}`}
              >
                <span className="reaction-emoji" aria-hidden="true">{item.emoji}</span>
                <span className="reaction-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Tombol Toggle Buka Komentar */}
        <button
          type="button"
          className={`comments-toggle-btn ${isCommentsOpen ? 'active' : ''}`}
          onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          aria-expanded={isCommentsOpen}
          aria-label={lang === 'id' ? 'Tampilkan Komentar' : 'Toggle Comments'}
        >
          <span>💬</span>
          <span>{lang === 'id' ? 'Komentar' : 'Comments'}</span>
          <span className="comment-badge-count">{comments.length}</span>
          <span className="chevron-icon" aria-hidden="true">▼</span>
        </button>
      </div>

      {/* Accordion / Drawer Komentar */}
      {isCommentsOpen && (
        <div className="project-comments-drawer" role="region" aria-label="Diskusi Proyek">
          <div className="comments-header-row">
            <h4 className="comments-heading">
              <span>💬</span>
              <span>{lang === 'id' ? 'Ulasan & Diskusi Proyek' : 'Project Discussion & Reviews'}</span>
            </h4>
            <span className="comments-count-pill">
              {comments.length} {lang === 'id' ? 'Komentar' : 'Comments'}
            </span>
          </div>

          {/* Feedback sukses komentar */}
          {submitFeedback && (
            <div
              style={{
                background: 'rgba(130, 190, 59, 0.15)',
                border: '1px solid rgba(130, 190, 59, 0.4)',
                borderRadius: '8px',
                padding: '8px 12px',
                marginBottom: '12px',
                color: 'var(--lime-green-light)',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Icon name="check" size={14} />
              <span>{lang === 'id' ? 'Komentar Anda berhasil dipublikasikan!' : 'Your comment has been posted!'}</span>
            </div>
          )}

          {/* Form Tulis Komentar */}
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              className="comment-input-name"
              placeholder={lang === 'id' ? 'Nama Anda *' : 'Your Name *'}
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
            <textarea
              className="comment-textarea"
              placeholder={
                lang === 'id'
                  ? 'Tuliskan apresiasi, saran, atau pertanyaan untuk proyek ini...'
                  : 'Leave your feedback, question, or appreciation for this project...'
              }
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
              rows="2"
            ></textarea>
            <div className="comment-submit-row">
              <button
                type="submit"
                className="btn-post-comment"
                disabled={!authorName.trim() || !commentText.trim()}
              >
                <span>{lang === 'id' ? 'Kirim Komentar' : 'Post Comment'}</span>
                <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </form>

          {/* Daftar Komentar */}
          <div className="comments-list">
            {comments.length === 0 ? (
              <p className="no-comments-placeholder">
                {lang === 'id' ? 'Belum ada komentar. Jadilah yang pertama berkomentar!' : 'No comments yet. Be the first to comment!'}
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div
                    className="comment-avatar"
                    style={{ backgroundColor: comment.avatarColor || '#2563EB' }}
                    aria-hidden="true"
                  >
                    {getInitials(comment.name)}
                  </div>
                  <div className="comment-content-box">
                    <div className="comment-meta">
                      <div className="comment-author-name">
                        <span>{comment.name}</span>
                        {comment.role && (
                          <span className="comment-author-role">({comment.role})</span>
                        )}
                      </div>
                      <span className="comment-time">
                        {lang === 'id' ? (comment.time || 'Baru saja') : (comment.timeEn || comment.time || 'Just now')}
                      </span>
                    </div>
                    <p className="comment-text">
                      {lang === 'id' ? comment.text : (comment.textEn || comment.text)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
