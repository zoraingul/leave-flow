function renderSidebar(active) {
  const links = [
    { href: 'dashboard.html',    icon: '📊', label: 'Dashboard',     key: 'dashboard' },
    { href: 'apply-leave.html',  icon: '📝', label: 'Apply Leave',   key: 'apply'     },
    { href: 'leave-history.html',icon: '📋', label: 'Leave History', key: 'history'   },
    { href: 'approval.html',     icon: '✅', label: 'Approvals',     key: 'approval'  },
  ];

  return `
    <div class="sidebar">
      <div class="sidebar-logo">
        <h2>LeaveFlow</h2>
      </div>
      <nav class="sidebar-nav">
        ${links.map(l => `
          <a href="${l.href}" class="nav-link ${active === l.key ? 'active' : ''}">
          ${l.label}
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        👤 Zorain Gul &nbsp;|&nbsp; ID-01
      </div>
    </div>
  `;
}

function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}
